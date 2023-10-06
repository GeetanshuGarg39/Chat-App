import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';

const CustomInput = ({ name, helperText, placeholderText, type, ...other }) => {

    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div>
                    <input
                        {...field}
                        className={`shadow-inner w-full p-3 text-slate-500 border rounded-md focus:outline-none focus:border-gray-400 ${error ? 'border-red-500' : 'border-gray-300'
                            }`}
                        type={type ? type : "text"}
                        placeholder={placeholderText}
                        value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
                        {...other}
                    />
                    {error && (
                        <div className="text-red-500 text-sm mt-1">{error.message}</div>
                    )}
                </div>
            )} />
    )
}

CustomInput.propTypes = {
    name: PropTypes.string,
    helperText: PropTypes.node,
}

export default CustomInput
