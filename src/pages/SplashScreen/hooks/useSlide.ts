import { useEffect, useState, useRef } from "react";

const useSlide = (content: number = 1) => {
  const $ref = useRef<HTMLDivElement>(null);
  const [_currentSlide, setCurrentSlide] = useState(0);

  const _sliderDot = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    let current;
    if (_currentSlide === 0) {
      current = 0;
    } else {
      current = _currentSlide - 1;
      slide(current);
      activeSlide(current);
      setCurrentSlide(current);
    }
  };

  const handleNext = () => {
    let current = _currentSlide;
    if (current === 0 || current < content) {
      let recurrent = current + 1;
      slide(recurrent);
      activeSlide(recurrent);
      setCurrentSlide(recurrent);
    } else if (current === content - 1) {
      slide(0);
      activeSlide(0);
      setCurrentSlide(0);
    }
  };

  const handleDotClick = (param: number) => {
    slide(param);
    setCurrentSlide(param);
    activeSlide(param);
  };

  const activeSlide = (active: number) => {
    const _singleDot =
      _sliderDot.current?.querySelectorAll<HTMLElement>(".dot");
    if (_singleDot) {
      // @ts-ignore
      _singleDot.forEach((slide: HTMLElement, index: number) => {
        if (index !== active) {
          _singleDot[index].style.backgroundColor = "#73717173";
          _singleDot[index].style.width = "10px";
        } else {
          _singleDot[index].style.backgroundColor = "#3d0270";
          _singleDot[index].style.width = "20px";
        }
      });
    }
  };

  const slide_container =
    $ref.current?.querySelectorAll<HTMLElement>(".container");

  const slide = (current: number) => {
    slide_container?.forEach((item: HTMLElement) => {
      item.style.transform = `translateX(-${current * 100}%)`;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (content > 1) {
        setCurrentSlide(_currentSlide + 1);
      }
    }, 40000);

    if (_currentSlide > content - 1) {
      setCurrentSlide(0);
    }

    slide(_currentSlide);
    activeSlide(_currentSlide);
    return () => clearInterval(interval);
  }, [_currentSlide]);

  return {
    handleNext,
    handlePrev,
    handleDotClick,
    activeSlide,
    slide,
    $ref,
    _sliderDot,
  };
};

export default useSlide;