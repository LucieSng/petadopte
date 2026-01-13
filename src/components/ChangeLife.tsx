import CtaDonation from "./CtaDonation";
import CtaAdopt from "./CtaAdopt";
import CtaBecomeVolunteer from "./CtaBecomeVolunteer";
export default function ChangeLife() {
  return (
    <div className="bg-[var(--light-color)] p-4">
      <div id="text" className="text-center m-10  ">
        <h1
          style={{ fontFamily: "var(--font-family-heading)" }}
          className="text-3xl font-bold"
        >
          Prêt-e à changer une vie ?{" "}
        </h1>

        <p className="p-4">
          Adoptez, partagez, soutenez... Chaque geste compte. Que vous ouvriez
          votre foyer ou votre coeur,
          <br />
          vous pouvez offrir une seconde chance à un animal abandonné.
        </p>
      </div>

      <div id="button" className="flex justify-center gap-4 m-10">
        <CtaAdopt
          text={"Adopter un animal"}
          className={
            "bg-[var(--dark-color)] hover:bg-[var(--dark-color)] hover:text-[var(--primary-color)] text-[var(--primary-color)] font-medium py-2 px-4 rounded-full cursor-pointer"
          }
        />
        <CtaDonation></CtaDonation>
        <CtaBecomeVolunteer
          className={
            "bg-[var(--btn-accent-bg)] hover:bg-[var(--dark-color)] hover:text-[var(--primary-color)] text-[var(--primary-color)] font-medium py-2 px-4 rounded-full cursor-pointer"
          }
          text={"Devenir bénévole"}
        />
      </div>
    </div>
  );
}
