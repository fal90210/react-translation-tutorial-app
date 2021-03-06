import React from "react";
import { translate, useTranslation } from "react-i18next";

const { t } = useTranslation();

function TeacherBanner() {
    const { t } = useTranslation();

    return (
            <section className="teacherBanner">
                {/*<p className="center">{t("Enterprise Intro")}</p>*/}

                <div className="inner-wrapper">

                    <div className="teacher animate-from-bottom"></div>
                    <div className="cta-btn center">
                        <a href="/register">{t("Be an Instructor")}</a>
                    </div>

                    <div className="teacher-title animate-from-bottom">
                        <h2>{t("Take your passion")}</h2>
                    </div>

                </div>
            </section>
    );
}

export default TeacherBanner;
