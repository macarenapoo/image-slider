type $Action<T, P> = {
  payload: P;
  type: T;
};
export const NEXT_SLIDE = 'NEXT_SLIDE';
export type NextSlide = $Action<typeof NEXT_SLIDE, null>;
export const nextSlide = () => {
  return {
    type: NEXT_SLIDE
  };
};
export type Action = NextSlide;
