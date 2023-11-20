import Field from './Field'
import Label from './Label'
import Input from './Input'
import Button from './Button'
import { insertCard } from '../utils/supabase-client'
import { redirect } from 'next/navigation'

async function createCard(formData) {
  'use server'
  const title = formData.get('title')
  const subtitle = formData.get('subtitle')
  const img = formData.get('img')
  const description = formData.get('description')
  const card = { title, subtitle, img, description }
  await insertCard(card)
  redirect('/')
  // get each field out of formData
  // call supabase-client insertCard
}

export default function CardForm() {
  return (
    <form action={createCard} className="bg-emerald-700 p-6 my-6 rounded-lg">
      <Field>
        <Label label="Title" htmlFor="title" />
        <Input id="title" name="title" placeholder="Enter title here..." />
      </Field>
      <Field>
        <Label label="Subtitle" htmlFor="subtitle" />
        <Input id="subtitle" name="subtitle" placeholder="Enter subtitle here..." />
      </Field>
      <Field>
        <Label label="Image" htmlFor="img" />
        <Input id="img" name="img" placeholder="Enter image here..." />
      </Field>
      <Field>
        <Label label="Description" htmlFor="description" />
        <Input id="description" name="description" placeholder="Enter description here..." />
      </Field>
      <div className="flex justify-end mt-8">
        <Button type="submit">Add Card</Button>
      </div>
    </form>
  )
}
