// import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
"use client";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Image,
    Link,
    Spacer,
} from "@nextui-org/react";

export default function CardComponent({ bodyContent, title, picture,link,linkText }: any) {
  return (
    // <Card className="max-w-[400px]">
    <Card className="w-full mt-10">
      <CardHeader className="flex gap-3">
        <h1 className="text-xl ml-2">{title} </h1>
      </CardHeader>

      <CardBody>
        <Image
        radius="none"
        alt="backgroudnimage"
        src={picture}
        />
        <Spacer />
        <p>{bodyContent}</p>
      </CardBody>
      {link ? <><Divider />
      <CardFooter>
         <Link
          isExternal
          showAnchorIcon
        //   href="https://github.com/nextui-org/nextui"
        href={link}
        >
          {linkText}
        </Link>
      </CardFooter></>: <div style={{display:'hidden'}}></div>}
    </Card>
  );
}
