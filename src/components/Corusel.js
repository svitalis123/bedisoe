import React from 'react';
import '../css/Corusel.css';

/* eslint-disable */
console.clear();

const slides = [
  {
    title: 'Machu Picchu',
    subtitle: 'Peru',
    description: 'Adventure is never far away',
    image:
      '/images/gif1.gif',
  },
  {
    title: 'Chamonix',
    subtitle: 'France',
    description: 'Let your dreams come true',
    image:
      '/images/gif2.gif',
  },
  {
    title: 'Mimisa Rocks',
    subtitle: 'Australia',
    description: 'A piece of heaven',
    image:
      '/images/gif3.gif',
  },
  {
    title: 'Four',
    subtitle: 'Australia',
    description: 'A piece of heaven',
    image:
      '/images/new1gif.gif',
  },
  {
    title: 'Five',
    subtitle: 'Australia',
    description: 'A piece of heaven',
    image:
      '/images/new2gif.gif',
  },
  {
    title: 'six',
    subtitle: 'get one',
    description: 'shinny',
    image:
      '/images/new3gif.gif',
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    const el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function Corusel() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button type="button" onClick={() => dispatch({ type: 'PREV' })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        const offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button type="button" onClick={() => dispatch({ type: 'NEXT' })}>›</button>
    </div>
  );
}

export default Corusel;
