import { OrderActions } from "../useReducer/user-reducer";
import { tipOptions } from "../data/propinas";

type TipPercentageFormProps = {
  tip: number;
  dispatch: React.Dispatch<OrderActions>;
};

export default function TipPercentageForm({
  dispatch,
  tip,
}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form action="">
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={(e) =>dispatch({type: "add-tip",payload: { value: +e.target.value },})
              }
              checked={tipOption.value === tip}
            />
          </div>
        ))}
        <div></div>
      </form>
    </div>
  );
}
