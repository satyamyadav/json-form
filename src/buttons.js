import dom from './dom';

// action button
const ActionButton = actionButton => {

  const actions = {
    onloading(ev) {
      const btn = ev.target;
      const {
        isLoading = btn.state.isLoading
      } = ev.detail;
      const { loader, text } = btn.state;
      btn.innerHTML = isLoading ? loader : text;
      btn.disabled = isLoading;
      btn.state.isLoading = !isLoading;
    }
  }

  const { text = '' } = actionButton;
  const btn = dom.button({ ...actionButton }, [text]);
  const state = {
    loader: actionButton.loader || 'Loading...',
    isLoading: false,
    text,
  };

  btn.state = state;
  btn.addEventListener('loading', actions.onloading);
  return btn;
};

export {
  ActionButton,
};
