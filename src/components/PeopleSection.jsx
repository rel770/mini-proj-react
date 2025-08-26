import Card from "./Card";

const ProfileCards = () => {
  return (
    <section style={{ padding: 20 }}>
      <Card
        avatar={"/vite.svg"}
        name="Yehuda Peretz"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus."
        person="friend"
      />
      <Card
        name="Moshe Ben Simon"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        person="teacher"
      />
      <Card
        avatar={"/vite.svg"}
        name="Avraham Levi"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        person="student"
      />
    </section>
  );
};

export default ProfileCards;
