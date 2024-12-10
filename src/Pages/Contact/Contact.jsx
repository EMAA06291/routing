import React from 'react'
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
export default function  Contact() {
  return (
  <body className='flex justify-center h-100 py-6'>
      <Card className=" w-1/2">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput id="name" type="email" placeholder="your name" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="age " value="Your age" />
          </div>
          <TextInput id="age " type="text" placeholder="your age" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="your email" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit" className='w-[100px]'>send</Button>
      </form>
    </Card>
  </body>
  );
}
