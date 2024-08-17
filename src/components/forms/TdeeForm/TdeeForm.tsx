"use client";
import { ActivityLevel, Sex } from "@/types";
import { useRouter } from "next/navigation";
import { TdeeFormSchema, useTdeeForm } from "../../../hooks/useTdeeForm";
import { calculateBMR } from "@/lib/bmr";
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

    const bmr = calculateBMR({
      ageInYears: +data.age,
      heighInCm: +data.height,
      weightInKg: +data.weight,
      sex: data.sex,
    });

    const searchParams = new URLSearchParams(transformObjValuesToString(data));
    router.push(`/results?${searchParams.toString()}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="sex"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sex</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormItem>
                    <FormControl>
                      <RadioGroupItem value="2" />
                    </FormControl>
                    <FormLabel>Male</FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioGroupItem value="1" />
                    </FormControl>
                    <FormLabel>Female</FormLabel>
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
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input {...field} type="number" placeholder="Age" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight</FormLabel>
              <FormControl>
                <Input {...field} type="number" placeholder="Age" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height</FormLabel>
              <FormControl>
                <Input {...field} type="number" placeholder="Age" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="activity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Activity</FormLabel>
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
        <Button type="submit">Calculate</Button>
      </form>
    </Form>
  );
}

{
  /* <input type="radio" {...register("sex")} value={Sex.FEMALE} />
      <input type="radio" {...register("sex")} value={Sex.MALE} />
      <input {...register("age")} type="number" placeholder="Age" />
      <input {...register("weight")} type="number" placeholder="kg" />
      <input {...register("height")} type="number" placeholder="cm" />
      <select {...register("activity")}>
        <option value={ActivityLevel.SEDENTARY}>Sedentary</option>
        <option value={ActivityLevel.LIGHTLY_ACTIVE}>Lightly active</option>
        <option value={ActivityLevel.MODERATELY_ACTIVE}>
          Moderately active
        </option>
        <option value={ActivityLevel.VERY_ACTIVE}>Very active</option>
        <option value={ActivityLevel.SUPER_ACTIVE}>Super active</option>
      </select>
      <button type="submit">Calculate</button> */
}
