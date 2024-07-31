import AgeInput from "./AgeInput";
import GengerInput from "./GengerInput";
import UnderlyingInput from "./UnderlyingInput";
import AllergyInput from "./AllergyInput";

function Index() {
  return (
    <div className="flex w-full  justify-end">
      <div className="rounded-md bg-slate-200 w-[250px] p-3 mb-4">
        <AgeInput />
        <GengerInput />
        <UnderlyingInput />
        <AllergyInput />
      </div>
    </div>
  );
}

export default Index;
