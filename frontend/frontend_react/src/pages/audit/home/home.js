import React from 'react';

const AuditHome = () => {

    return (
        <div>
            <div className={"continer"}>

                <section id="hero" className="hero">
                    <div>
                        <h1 className="hero__title">Добро пожаловать в QZ 3.0: Ваш надежный партнер для автоматизации
                            внутреннего аудита информационных систем (ИС)</h1>

                        <h2 className="section-features__title">"Аудит и внутренний аудит: Обзор"</h2>
                        {/*<img src={icon1} alt="Icon 1" className="section-features__icon"/>*/}
                        <p className="hero__subtitle"><span className={"marka"}>Аудит</span> - это важный этап в жизни любой организации. Этот процесс
                            оценки и проверки финансовых, операционных и информационных систем организации не только
                            обязателен для удовлетворения правительственных регулирований, но также служит инструментом
                            для обеспечения эффективности и надежности бизнес-процессов.
                            <br className={"devid"}/>
                            <span className={"marka"}>Внутренний аудит</span>, с другой стороны, - это подход к аудиту, осуществляемый внутри
                            организации. Это самый ценный инструмент для оценки и улучшения управления и контроля
                            организацией. Внутренний аудит ориентирован на помощь руководству и управлению в выявлении
                            слабых мест, соблюдении нормативов и повышении производительности. </p>
                    </div>
                </section>
                <section id="features" className="section-features">
                    <div className="container">
                        <h2 className="section-features__title">QZ 3.0: Наша роль в автоматизации внутреннего аудита
                            ИС</h2>
                        <div className="section-features__grid">
                            <div className="section-features__item">

                                <h3 className="section-features__title"></h3>
                                <p className="hero__subtitle"><span className={"marka"}>Мы предлагаем</span> современное программное обеспечение QZ 3.0,
                                    которое специально разработано для упрощения процессов внутреннего аудита
                                    информационных систем. Наш продукт предоставляет вам возможность:
                                    <br className={"devid"}/>
                                    <span className={"marka"}>Автоматизировать</span> процессы аудита для повышения эффективности.
                                    <br className={"devid"}/>
                                    <span className={"marka"}>Обеспечить</span> соблюдение нормативов и стандартов в области информационной безопасности.
                                    <br className={"devid"}/>
                                    <span className={"marka"}>Следить</span> за производительностью ИС и выявлять уязвимости.
                                    <br className={"devid"}/>
                                    <span className={"marka"}>Создавать </span>отчеты и анализировать результаты аудита.
                                    <br className={"devid"}/>
                                    Мы стремимся быть вашим надежным партнером в области внутреннего аудита ИС. С QZ
                                    3.0, вы можете быть уверены в надежности и эффективности вашего аудита.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AuditHome;
