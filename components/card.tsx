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
    <Card className="max-w-[400px] h-[485px] mb-1">
      <CardHeader className="flex gap-3 justify-center">
        <h1 className="text-xl">{title} </h1>
      </CardHeader>

      <CardBody className="flex gap-3">
        <Image
        radius="none"
        alt="backgroudnimage"
        src={picture}
        className='h-full w-full px-2'
        />
        <Spacer />
        <p className='text-justify px-2 mb-3'>{bodyContent}</p>
      </CardBody>
      {link ? <><Divider />
      <CardFooter>
         <Link
          isExternal
          showAnchorIcon
        href={link}
        >
          {linkText}
        </Link>
      </CardFooter></>: <div style={{display:'hidden'}}></div>}
    </Card>
  );
}
