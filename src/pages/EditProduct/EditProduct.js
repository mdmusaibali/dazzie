import { Card } from "../../components/Card/Card";
import { EditForm } from "../../components/EditForm/EditForm";
import "./EditProduct.scss";
export const EditProduct = () => {
  return (
    <div className="EditPackage">
      <h1 className="EditPackage__heading">Edit Product</h1>
      <Card>
        <EditForm />
      </Card>
    </div>
  );
};
