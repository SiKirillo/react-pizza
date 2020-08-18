import React from 'react';

import './App.css';

function App() {
    return (
        <div className="main">
            <div className="wrapper">
                <div className="header">
                    <div className="container">
                        <div className="header__logo">
                            <div className="header__img">
                                <img
                                    src="https://png.pngtree.com/element_our/png_detail/20180925/slice-of-pizza-in-flat-style-png_111519.jpg"/>
                            </div>
                            <div className="header__description">
                                <span className="text_1-2em"><b>REACT PIZZA</b></span><br/>
                                <span className="text_disable">самая вкусная пицца во вселенной</span>
                            </div>
                        </div>
                        <div className="button-layout cart-button">
                            <span className="text_1-2em">300 $ / 1 шт.</span>
                        </div>

                    </div>
                </div>

                <div className="categories">
                    <div className="container">
                        <div className="categories__item">
                            <div className="categories__filter">
                                <div className="button-layout category-button button_selected">
                                    <span className="text_0-9em"><b>Все</b></span>
                                </div>
                                <div className="button-layout category-button">
                                    <span className="text_0-9em"><b>Мясные</b></span>
                                </div>
                                <div className="button-layout category-button">
                                    <span className="text_0-9em"><b>Вегетарианские</b></span>
                                </div>
                                <div className="button-layout category-button">
                                    <span className="text_0-9em"><b>Гриль</b></span>
                                </div>
                                <div className="button-layout category-button">
                                    <span className="text_0-9em"><b>Острые</b></span>
                                </div>
                                <div className="button-layout category-button">
                                    <span className="text_0-9em"><b>Закрытые</b></span>
                                </div>
                            </div>
                            <div className="categories__sort">
                                <div className="sort-label">
                            <span><b>Сортировка по: </b>
                                <span className="text_selected"><u>популярности</u></span>
                            </span>
                                </div>
                                <div className="sort-bottom">
                                    <p><span>популярности</span></p>
                                    <p><span>цене</span></p>
                                    <p><span>алфавиту</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <span className="text_1-5em"><b>Все пиццы</b></span>
                    <div className="content__items">
                        <div className="pizza">
                            <div className="pizza__image">
                                <img
                                    src="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/67e4a344-3b02-4015-9aa8-5cac4c9c665e.jpg"/>
                            </div>
                            <div className="pizza__title">
                                <span><b>Пепперони</b></span>
                            </div>
                            <div className="pizza__filter">
                                <div className="pizza__dough-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>тонкое</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>традиционное</b></span>
                                    </div>
                                </div>
                                <div className="pizza__size-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>26 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button button_disable">
                                        <span className="text_0-8em"><b>30 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>40 см.</b></span>
                                    </div>
                                </div>
                            </div>
                            <div className="pizza__bottom">
                                <div className="pizza__price">
                                    <span className="text_1-2em"><b>от 300 $</b></span>
                                </div>
                                <div className="button-layout bottom-button button_selected">
                                    <span className="text_0-9em"><b>+&nbsp;&nbsp;Добавить</b></span>
                                    <div className="button_re-selected">
                                        <span className="text_0-9em"><b>2</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pizza">
                            <div className="pizza__image">
                                <img
                                    src="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/7d2d57ef-1e81-4e96-9558-a1e0321471e7.jpg"/>
                            </div>
                            <div className="pizza__title">
                                <span><b>Сырный цыплёнок</b></span>
                            </div>
                            <div className="pizza__filter">
                                <div className="pizza__dough-parameters">
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>тонкое</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>традиционное</b></span>
                                    </div>
                                </div>
                                <div className="pizza__size-parameters">
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>26 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>30 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>40 см.</b></span>
                                    </div>
                                </div>
                            </div>
                            <div className="pizza__bottom">
                                <div className="pizza__price">
                                    <span className="text_1-2em"><b>от 300 $</b></span>
                                </div>
                                <div className="button-layout bottom-button">
                                    <span className="text_0-9em"><b>+&nbsp;&nbsp;Добавить</b></span>
                                    <div className="button_re-selected">
                                        <span className="text_0-9em"><b>2</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pizza">
                            <div className="pizza__image">
                                <img
                                    src="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/77c3701b-8ef4-4dbf-b028-e858a1d3e9d3.jpg"/>
                            </div>
                            <div className="pizza__title">
                                <span><b>Ветчина и грибы</b></span>
                            </div>
                            <div className="pizza__filter">
                                <div className="pizza__dough-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>тонкое</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>традиционное</b></span>
                                    </div>
                                </div>
                                <div className="pizza__size-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>26 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>30 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>40 см.</b></span>
                                    </div>
                                </div>
                            </div>
                            <div className="pizza__bottom">
                                <div className="pizza__price">
                                    <span className="text_1-2em"><b>от 300 $</b></span>
                                </div>
                                <div className="button-layout bottom-button">
                                    <span className="text_0-9em"><b>+&nbsp;&nbsp;Добавить</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="pizza">
                            <div className="pizza__image">
                                <img
                                    src="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/ebf8ce09-e5b2-4e7b-a32a-682c162094c9.jpg"/>
                            </div>
                            <div className="pizza__title">
                                <span><b>Четыре сыра</b></span>
                            </div>
                            <div className="pizza__filter">
                                <div className="pizza__dough-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>тонкое</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>традиционное</b></span>
                                    </div>
                                </div>
                                <div className="pizza__size-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>26 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>30 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>40 см.</b></span>
                                    </div>
                                </div>
                            </div>
                            <div className="pizza__bottom">
                                <div className="pizza__price">
                                    <span className="text_1-2em"><b>от 300 $</b></span>
                                </div>
                                <div className="button-layout bottom-button">
                                    <span className="text_0-9em"><b>+&nbsp;&nbsp;Добавить</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="pizza">
                            <div className="pizza__image">
                                <img
                                    src="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/5a673f2a-8cd9-4e5a-9145-5d6d8ea3eddd.jpg"/>
                            </div>
                            <div className="pizza__title">
                                <span><b>Цыплёнок барбекю</b></span>
                            </div>
                            <div className="pizza__filter">
                                <div className="pizza__dough-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>тонкое</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>традиционное</b></span>
                                    </div>
                                </div>
                                <div className="pizza__size-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>26 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>30 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>40 см.</b></span>
                                    </div>
                                </div>
                            </div>
                            <div className="pizza__bottom">
                                <div className="pizza__price">
                                    <span className="text_1-2em"><b>от 300 $</b></span>
                                </div>
                                <div className="button-layout bottom-button">
                                    <span className="text_0-9em"><b>+&nbsp;&nbsp;Добавить</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="pizza">
                            <div className="pizza__image">
                                <img
                                    src="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/9b9d0fc5-3427-4780-9641-a89d64ec1783.jpg"/>
                            </div>
                            <div className="pizza__title">
                                <span><b>Гавайская</b></span>
                            </div>
                            <div className="pizza__filter">
                                <div className="pizza__dough-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>тонкое</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>традиционное</b></span>
                                    </div>
                                </div>
                                <div className="pizza__size-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>26 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>30 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>40 см.</b></span>
                                    </div>
                                </div>
                            </div>
                            <div className="pizza__bottom">
                                <div className="pizza__price">
                                    <span className="text_1-2em"><b>от 300 $</b></span>
                                </div>
                                <div className="button-layout bottom-button">
                                    <span className="text_0-9em"><b>+&nbsp;&nbsp;Добавить</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="pizza">
                            <div className="pizza__image">
                                <img
                                    src="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/8a31baef-2589-42d1-9fdb-a7bb35d76c68.jpg"/>
                            </div>
                            <div className="pizza__title">
                                <span><b>Маргарита</b></span>
                            </div>
                            <div className="pizza__filter">
                                <div className="pizza__dough-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>тонкое</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>традиционное</b></span>
                                    </div>
                                </div>
                                <div className="pizza__size-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>26 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>30 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>40 см.</b></span>
                                    </div>
                                </div>
                            </div>
                            <div className="pizza__bottom">
                                <div className="pizza__price">
                                    <span className="text_1-2em"><b>от 300 $</b></span>
                                </div>
                                <div className="button-layout bottom-button">
                                    <span className="text_0-9em"><b>+&nbsp;&nbsp;Добавить</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="pizza">
                            <div className="pizza__image">
                                <img
                                    src="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/568ca023-28ff-47a1-8758-f162dee35ff4.jpg"/>
                            </div>
                            <div className="pizza__title">
                                <span><b>Пицца-пирог</b></span>
                            </div>
                            <div className="pizza__filter">
                                <div className="pizza__dough-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>тонкое</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>традиционное</b></span>
                                    </div>
                                </div>
                                <div className="pizza__size-parameters">
                                    <div className="button-layout pizza-settings-button button_selected">
                                        <span className="text_0-8em"><b>26 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>30 см.</b></span>
                                    </div>
                                    <div className="button-layout pizza-settings-button">
                                        <span className="text_0-8em"><b>40 см.</b></span>
                                    </div>
                                </div>
                            </div>
                            <div className="pizza__bottom">
                                <div className="pizza__price">
                                    <span className="text_1-2em"><b>от 300 $</b></span>
                                </div>
                                <div className="button-layout bottom-button">
                                    <span className="text_0-9em"><b>+&nbsp;&nbsp;Добавить</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
