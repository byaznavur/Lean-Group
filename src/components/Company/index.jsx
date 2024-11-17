import "./style.scss";
const Company = () => {
  return (
    <div className="container company">
      <h1>
        О компании <span>LEANGROUP</span>
      </h1>

      <div className="company-herro">
        <div className="company-herro-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Yzjyxi-fLTw?si=zgsCceFkGtdCpBdU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="company-herro-info">
          Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на
          сегодняшний день является ведущей компанией по производству ламинатных
          и экструзионных туб.
          <br /> <br />
          Имея две технологии – для производства ламинатных и экструзионных туб,
          мы предлагаем вам широкий спектр возможностей. Большим преимуществом
          является собственный печатный цех в ламинате и in-line печать в
          экструзии с возможностью различных дополнительных опций декора. Особое
          внимание уделяется работе с поставщиками для контроля и поддержания
          качества производимой нами продукции.
          <br /> <br />С января 2018 года компания стала членом Европейской
          Ассоциации производителей туб (ETMA), что подтверждает сильную позицию
          бренда и на рынке Европы.
        </div>
      </div>
    </div>
  );
};

export default Company;
