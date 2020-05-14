export const addTableScript = () => {
  const script = document.createElement('script');
  script.src = 'assets/js/table.js';
  script.async = true;

  return document.body.appendChild(script);
};

export const addAnotherScript = () => {
  //   const id = '';
  //   const src = './';
  //   return addScript(id, src);
};
