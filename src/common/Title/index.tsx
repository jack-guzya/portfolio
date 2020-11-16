import React from 'react';
import s from './Title.module.css';

const Title: React.FC = ({ children }) => <h2 className={s.title}>{children}</h2>;

export default Title;
