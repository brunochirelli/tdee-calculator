"use client";

import { ActivityLevel, Sex } from "@/types";
import { useRouter } from "next/navigation";
import { TdeeFormSchema, useTdeeForm } from "../../../hooks/useTdeeForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ACTIVITY_NAME_MAP } from "@/types/consts";

export default function TdeeForm() {
  const router = useRouter();
  const form = useTdeeForm();

  const onSubmit = (data: TdeeFormSchema) => {
    const transformObjValuesToString = (obj: object) =>
      Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, String(value)]),
      );

    const searchParams = new URLSearchParams(transformObjValuesToString(data));
    router.push(`/results?${searchParams.toString()}`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 max-w-md mx-auto"
      >
        <FormField
          control={form.control}
          name="sex"
          render={({ field }) => (
            <FormItem className="grid grid-cols-[6rem_1fr] items-center gap-4">
              <FormLabel className="text-right">Sex</FormLabel>
              <FormControl>
                <RadioGroup
                  className="flex"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormItem className="space-x-1">
                    <FormControl>
                      <RadioGroupItem value="2" />
                    </FormControl>
                    <FormLabel className="text-right">Male</FormLabel>
                  </FormItem>
                  <FormItem className="space-x-1">
                    <FormControl>
                      <RadioGroupItem value="1" />
                    </FormControl>
                    <FormLabel className="text-right">Female</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem className="grid grid-cols-[6rem_1fr] items-center gap-4">
              <FormLabel className="text-right">Age</FormLabel>
              <FormControl>
                <Input {...field} type="number" className="max-w-20" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem className="grid grid-cols-[6rem_1fr] items-center gap-4">
              <FormLabel className="text-right">Weight</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="kg"
                  className="max-w-20"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem className="grid grid-cols-[6rem_1fr] items-center gap-4">
              <FormLabel className="text-right">Height</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="cm"
                  className="max-w-20"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="activity"
          render={({ field }) => (
            <FormItem className="grid grid-cols-[6rem_1fr] items-center gap-4 max-w-fit">
              <FormLabel className="text-right">Activity</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(ActivityLevel).map((activity) => (
                    <SelectItem key={activity} value={activity}>
                      {ACTIVITY_NAME_MAP[activity]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-[6rem_1fr] items-center gap-4">
          <div className="col-start-2">
            <Button type="submit">Calculate</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
