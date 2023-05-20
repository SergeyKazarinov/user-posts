import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './page-note-found.module.scss';

const PageNotFound: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <section className={s.pageNotFound}>
      <h2 className={s.pageNotFound__title}>404</h2>
      <p className={s.PageNotFound__subtitle}>Страница не найдена</p>
      <button className={`button ${s.pageNotFound__link}`} onClick={handleClick}>
        Назад
      </button>
    </section>
  );
};

export default PageNotFound;
