import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import Select from 'react-select';

const GroupDropDown = ({ name, label, helperText, ...other }) => {
    const { control, setValue } = useFormContext();

    const handleSelectChange = (selectedOption) => {        
        setValue(name, selectedOption, { shouldValidate: true });
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div>
                    <label htmlFor={name} className="text-gray-600">
                        {label}
                    </label>
                    <Select
                        {...field}
                        id={name}
                        onChange={handleSelectChange}
                        options={other.options || []}
                        isMulti={other.multiple}
                        menuPortalTarget={document.body}
                        menuPosition="absolute"
                        styles={{
                            menu: (provided) => ({
                                ...provided,
                                maxHeight: '200px',
                                overflowY: 'auto', 
                            }),
                        }}
                    />
                    {error && <div className="text-red-500 text-sm mt-1">{error.message}</div>}                    
                </div>
            )}
        />
    );
};

GroupDropDown.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    helperText: PropTypes.node,
};

export default GroupDropDown;
