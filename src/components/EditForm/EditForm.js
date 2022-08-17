import { useRef } from "react";
import { Input } from "../Input/Input";
import "./EditForm.scss";
export const EditForm = () => {
  const idRef = useRef();
  const fileRef = useRef();
  const productNameRef = useRef();
  const productCategoryRef = useRef();
  const productPriceRef = useRef();
  const productDescriptionRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      id: idRef.current.value,
      file: fileRef.current.value,
      name: productNameRef.current.value,
      category: productCategoryRef.current.value,
      price: productPriceRef.current.value,
      description: productDescriptionRef.current.value,
    };
    console.log(newProduct);
  };
  return (
    <>
      <form className="EditForm" onSubmit={submitHandler}>
        <Input
          name="id"
          label="ID"
          type="text"
          placeholder="Enter product id"
          value="AAA1"
          ref={idRef}
        />
        <div className="EditForm__product--upload">
          <div className="EditForm__product--upload-image"></div>
          <div className="EditForm__product--upload-actions">
            <label
              htmlFor="upload"
              className="EditForm__product--upload-actions-label"
            >
              <p>Select your product picture</p>
              <span className="EditForm__product--upload-actions-button">
                Browse
              </span>
            </label>
            <input
              type="file"
              name="upload"
              id="upload"
              className="EditForm__product--upload-actions-upload"
              ref={fileRef}
            />
          </div>
        </div>
        <Input
          name="name"
          label="Product Name"
          type="text"
          placeholder="Enter product name"
          value="Cappucino"
          ref={productNameRef}
        />
        <label
          htmlFor="category"
          className="EditForm__product--category-select-label"
        >
          Category
        </label>
        <select
          name="category"
          id="category"
          className="EditForm__product--category-select"
          ref={productCategoryRef}
        >
          <option value="Food">Food</option>
          <option value="Drinks">Drinks</option>
          <option value="Snacks">Snacks</option>
          <option value="Packages">Packages</option>
        </select>
        <Input
          name="price"
          label="Price"
          type="text"
          placeholder="Enter price"
          value="$ 3"
          ref={productPriceRef}
        />
        <label
          className="EditForm__product--description-label"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="EditForm__product--description-textarea"
          name="description"
          id="description"
          cols="30"
          rows="10"
          defaultValue="A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk (microfoam)"
          ref={productDescriptionRef}
        ></textarea>
        <button className="EditForm__product--submit-button">Save</button>
        <button className="EditForm__product--cancel-button">Cancel</button>
      </form>
    </>
  );
};
