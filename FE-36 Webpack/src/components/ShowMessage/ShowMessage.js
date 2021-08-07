import './ShowMessage.scss';

const ShowMessage = (message) => {
  const container = document.createElement('div');
  container.classList.add('show-message');

  container.append(message);

  return container;
};

export default ShowMessage;
