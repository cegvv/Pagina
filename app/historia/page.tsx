import CardComponent from "@/components/card";
import { title } from "@/components/primitives";
import { dataImages } from "@/types";

const data = {
    mision:{
        label:"Misión",
        descripcion:""
    },
    vision:{
        label:"Visión",
        descripcion:""
    }
}
export default function HistoriaPage() {
return (
<div>
    <h1 className={title()}>Nuestra Historia</h1>
    <div className="flex flex-col lg:flex-row gap-4">
        <CardComponent
            title={data.mision.label}
            bodyContent={data.mision.descripcion}
            // link="https://github.com/nextui-org/nextui"
            // linkText="visit us"
            picture={dataImages[0].link}
        />
        <CardComponent
            title={data.vision.label}
            bodyContent={data.vision.descripcion}
            // link="https://github.com/nextui-org/nextui"
            // linkText="visit us"
            picture={dataImages[1].link}
        />
    </div>
</div>
);
}
