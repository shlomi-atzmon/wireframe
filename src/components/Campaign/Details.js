const Details = () => {
  return (
    <form>
      <div>
        <label>Campaign title</label>
        <input type="text" name="campaign-title" placeholder="Campaign title" />
      </div>
      <div>
        <label>Description</label>
        <input type="text" name="description" placeholder="Description" />
      </div>
      <button>Discard</button>
      <button>Next</button>
    </form>
  );
};

export default Details;
