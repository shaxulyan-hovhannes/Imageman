import createLayout from './components/layout';
import './app.scss';

const root = document.getElementById('root');
const layout = createLayout();

document.addEventListener('DOMContentLoaded', () => {
  root?.appendChild(layout);
});
