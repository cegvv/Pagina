import CardComponent from "@/components/card";
import { title } from "@/components/primitives";
import { dataImages } from "@/types";

export default function HistoriaPage() {
return (
<div>
    <h1 className={title()}>Nuestra Historia</h1>
    <div className="flex flex-col lg:flex-row gap-4">
        <CardComponent
            title="lorem ipsum lorem ipsum"
            bodyContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, et dolore voluptatum adipisci similique in id doloremque aperiam facilis nobis quibusdam ut laborum quos odit. Facilis dicta cumque cupiditate autem."
            link="https://github.com/nextui-org/nextui"
            linkText="visit us"
            picture={dataImages[0].link}
        />
        <CardComponent
            title="lorem ipsum lorem ipsum"
            bodyContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, et dolore voluptatum adipisci similique in id doloremque aperiam facilis nobis quibusdam ut laborum quos odit. Facilis dicta cumque cupiditate autem."
            link="https://github.com/nextui-org/nextui"
            linkText="visit us"
            picture={dataImages[1].link}
        />
    </div>
</div>
);
}
