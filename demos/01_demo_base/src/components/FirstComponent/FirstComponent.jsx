import classes from "./FirstComponent.module.css";

const FirstComponent = () => {
  let nom = "Tata";

  const maFonction = () => {
    let age = 18;
    return "Je suis " + nom;
  };

  return (
    <>
      <div>
        <h1 className={classes.paragrapheRouge}>Mon premier composant</h1>
        <p className={classes.paragrapheRouge}>Je suis {nom}</p>
        <p>{maFonction()}</p>
      </div>
    </>
  );
};

export default FirstComponent;
