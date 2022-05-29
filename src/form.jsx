import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const options = [
  { value: 'Canada', label: 'Canda' },
  { value: 'USA', label: 'USA' },
  { value: 'Australia', label: 'Australia' },
  { value: 'New-Zealand', label: 'New-Zeland' },
  { value: 'UK', label: 'UK' },
  { value: 'Germany', label: 'Germany' },
  { value: 'Ireland', label: 'Ireland' },
];

const courseLevel = [
  { value: 'UG', label: 'UG' },
  { value: 'PG', label: 'PG' },
];

const animatedComponents = makeAnimated();

// const [first, setfirst] = useState(second);

export function Form() {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register('firstName', { required: true })}
          placeholder="Full Name"
        />
        <input
          type="text"
          placeholder="Email"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register('Mobile number', {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />

        <Select
          name="Course Level"
          placeholder="Course Level"
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultInputValue={[courseLevel[2], courseLevel[2]]}
          options={courseLevel}
        />

        <Select
          name="Country Preferences"
          placeholder="Country Preferences"
          closeMenuOnSelect={false}
          components={animatedComponents}
          options={options}
          isMulti
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
