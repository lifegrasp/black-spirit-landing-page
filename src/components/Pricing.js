import "../styles/Pricing.css";

function Pricing() {
  const selectClass = (
    <>
      <option disabled selected>
        Select class
      </option>
      <option value={"Warrior"}>Warrior</option>
      <option value={"Ranger"}>Ranger</option>
      <option value={"Sorceress"}>Sorceress</option>
      <option value={"Berserker"}>Berserker</option>
      <option value={"Tamer"}>Tamer</option>
      <option value={"Musa"}>Musa</option>
      <option value={"Maehwa"}>Maehwa</option>
      <option value={"Valkyrie"}>Valkyrie</option>
      <option value={"Kunoichi"}>Kunoichi</option>
      <option value={"Ninja"}>Ninja</option>
      <option value={"Wizard"}>Wizard</option>
      <option value={"Witch"}>Witch</option>
      <option value={"Dark Knight"}>Dark Knight</option>
      <option value={"Striker"}>Striker</option>
      <option value={"Mystic"}>Mystic</option>
      <option value={"Archer"}>Archer</option>
      <option value={"Lahn"}>Lahn</option>
      <option value={"Shai"}>Shai</option>
      <option value={"Guardian"}>Guardian</option>
      <option value={"Hashashin"}>Hashashin</option>
      <option value={"Nova"}>Nova</option>
      <option value={"Sage"}>Sage</option>
      <option value={"Corsair"}>Corsair</option>
      <option value={"Drakania"}>Drakania</option>
    </>
  );

  const selectRegion = (
    <>
      <option disabled selected>
        Select your region
      </option>
      <option value={"NA"}>North America</option>
      <option value={"SA"}>South America</option>
      <option value={"EU"}>Europe</option>
      <option value={"MENA"}>Middle East and North Africa</option>
      <option value={"RU"}>Russia</option>
      <option value={"SEA"}>Southeast Asia</option>
      <option value={"JP"}>Japan</option>
      <option value={"TW"}>Taiwan</option>
    </>
  );

  const descEnhance =
    "A click is all you need to gain power. Everything will become dist and listless.";

  const descDrop =
    "Time seems so ephemeral as everything is so easily obtained with this.";

  const descAccu =
    "Precision is key to damage. Not able to hit with raw power is meaningless.";

  const descBlackSpirit =
    "You are the master of all. The mere mention of your name will make anyone tremble. ";

  return (
    <>
      <h1 className="avail">Avail To Our Services</h1>
      <div className="showcase-pricing">
        {/* Account information starts here */}
        <form>
          <h2>Account Information</h2>
          <div className="form-group">
            <input
              className="form-control"
              type={"text"}
              placeholder={"Family Name"}
              required
            />
            <input
              className="form-control"
              type={"text"}
              placeholder={"Character Name"}
              required
            />
            <select className="form-control" required>
              {selectClass}
            </select>
            <select className="form-control" required>
              {selectRegion}
            </select>
            <input
              className="form-control"
              type={"email"}
              placeholder={"Account Name"}
              required
            />
            <input
              className="form-control"
              type={"password"}
              placeholder={"Password"}
              required
            />
            <input
              className="form-control form-button"
              type={"submit"}
              value={"Check Account"}
            />
          </div>
        </form>
        {/* Account information ends here */}

        {/* Blessing selection starts here */}
        <div className="pricing">
          <h2>Choose Blessing</h2>
          <div className="pricing-group">
            <div className="product">
              <div className="selection">Enhancing Rate</div>
              <h2>$500</h2>
              <p>{descEnhance}</p>
              <button>PURCHASE</button>
            </div>

            {/* Divide */}

            <div className="product">
              <div className="selection">Drop Rate</div>
              <h2>$500</h2>
              <p>{descDrop}</p>
              <button>PURCHASE</button>
            </div>

            {/* Divide */}

            <div className="product">
              <div className="selection">Accuracy Rate</div>
              <h2>$500</h2>
              <p>{descAccu}</p>
              <button>PURCHASE</button>
            </div>

            {/* Divide */}

            <div className="product">
              <div className="selection">Black Spirit</div>
              <h2>$1,250</h2>
              <p>{descBlackSpirit}</p>
              <button>PURCHASE</button>
            </div>
          </div>
        </div>
        {/* Blessing selection ends here */}
      </div>
    </>
  );
}

export default Pricing;
