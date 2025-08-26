import "./Card.css";
import Button from "./Button";

const Card = ({
  avatar,
  name = "Unnamed",
  description = "No description.",
  person = "friend",
  onButtonClick,
}) => {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();

  return (
    <article className="card">
      <div className="card__avatarWrap">
        {avatar ? (
          <img className="card__avatar" src={avatar} alt={name} />
        ) : (
          <div className="card__avatar card__avatar--initials">{initials}</div>
        )}
      </div>

      <div className="card__body">
        <div className="card__name">{name}</div>
        <div className="card__desc">{description}</div>
      </div>

      <div className="card__actions">
        <Button person={person} onClick={onButtonClick}>
          Contact
        </Button>
      </div>
    </article>
  );
};

export default Card;
