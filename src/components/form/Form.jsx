const Form = () => {
  return (
    <>
      <div>
        <label for="oamount">Amount to Convert :</label>
        <input type="number" placeholder="0.00" id="oamount" />
      </div>

      <div>
        <div class="col-sm-6">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">From</span>
            </div>
            <select class="form-control from" id="sel1">
              <option value="">Select One …</option>
              <option value="USD">USD</option>
              <option value="UAH">UAH</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">To</span>
            </div>
            <select class="form-control to" id="sel2">
              <option value="">Select One …</option>
              <option value="USD">USD</option>
              <option value="UAH">UAH</option>
              <option value="AED">EUR</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <button type="submit">Convert</button>

        <button>Reset</button>
      </div>
      <div>
        <h2>
          Converted Amount :<span></span>
        </h2>
      </div>
    </>
  );
};

export default Form;
