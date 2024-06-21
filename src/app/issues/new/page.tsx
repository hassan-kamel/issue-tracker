"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm();
  const router = useRouter();
  return (
    <div className="max-w-xl space-y-3">
      <form
        className="max-w-xl space-y-3"
        onSubmit={handleSubmit(async (data) => {
          await axios.post("/api/issue", data);
          router.push("/issues");
        })}
      >
        <TextField.Root placeholder="Title" {...register("title")} />

        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <SimpleMDE placeholder="Description " {...field} />
          )}
        />
        <Button type="submit">Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
