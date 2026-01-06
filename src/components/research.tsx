export default function Research() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    console.log(new URLSearchParams(formData).toString());

    // Le console.log sera a modifier par une route lorsqu'elles seront crées.
  }
  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Type d'animal
        <select name="selectedType">
          <option value="dog">Chien</option>
          <option value="cat">Chat</option>
          <option value="rodent">Rongeur</option>
          <option value="rabbit">Lapin</option>
        </select>
      </label>
      <label>
        Localisation
        <input
          name="location"
          type="text"
          className=" border-2 border-solid "
        />
      </label>
      <hr />
      <button type="submit"> Rechercher </button>
    </form>
  );
}
