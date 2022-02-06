function Design() {
  return (
    <main>
      <h1>Today's Reviews</h1>
      <h2>Today's Reviews</h2>
      <h3>Today's Reviews</h3>
      <h4>Today's Reviews</h4>
      <h5>Today's Reviews</h5>
      <h6>Today's Reviews</h6>
      <p>
        Neo Forza is one of the newer manufacturers of DRAM memory modules and
        flash memory products. Under the guidance of parent company Goldkey, Neo
        Forza is a Taiwanese company founded in 2018 that focuses on
        enthusiast-grade products.
      </p>
      <p>
        The Neo Forza Faye DDR4-5000 16 GB kit I have for review today has am
        XMP profile with 19-26-26-42 timings at 1.6 V. In this review, we will
        be testing the memory at its advertised speed before looking into what a
        bit of tuning can give us in terms of extra performance. Without further
        ado, let's now see how this Neo Forza Faye kit stacks up to the
        competition!
      </p>

      <section>
        <button className="btn btn-primary">click</button>
        <button className="btn btn-secondary">click</button>
        <button className="btn btn-light">BUY</button>
        <button className="btn btn-dark">BUY NOW</button>
        <button className="btn btn-link">BUY NOW</button>
      </section>

      <hr />

      <section>
        <button className="btn btn-secondary btn-full">click</button>
      </section>

      <hr />

      <section>
        <input className="inp inp-light" type="text" placeholder="Hello .." />
        <input className="inp inp-dark" type="text" placeholder="Hello .." />
      </section>
      <hr />

      <section>
        <input
          className="inp inp-full inp-light"
          type="text"
          placeholder="Hello .."
        />
        <input
          className="inp inp-full inp-dark"
          type="text"
          placeholder="Hello .."
        />
      </section>
      <hr />

      <section>
        <div className="inp-btn inp-btn-full">
          <input className="inp inp-light" type="text" placeholder="Hello .." />
          <button className="btn btn-primary">add</button>
        </div>

        <div className="inp-btn">
          <input
            className="inp -full inp-dark"
            type="text"
            placeholder="Hello .."
          />
          <button className="btn btn-primary">add</button>
        </div>
      </section>

      <hr />

      <section className="modal-wrapperx">
        <main className="modal">
          <div>
            <h2>modal</h2>
            <p>
              <small>description</small>
            </p>
          </div>
          <hr />
          {/*  */}
          <div>
            <div className="inp-section">
              <label>username</label>
              <input
                className="inp inp-full inp-dark"
                type="text"
                placeholder="Hello .."
              />
            </div>
            <div className="inp-section">
              <label>username</label>
              <input
                className="inp inp-full inp-dark"
                type="text"
                placeholder="Hello .."
              />
            </div>
            <div className="inp-section">
              <label>username</label>
              <input
                className="inp inp-full inp-dark"
                type="text"
                placeholder="Hello .."
              />
            </div>
            <button className="btn btn-secondary btn-full">click</button>
          </div>
        </main>
      </section>
      <hr />
      <hr />
    </main>
  );
}

export default Design;
