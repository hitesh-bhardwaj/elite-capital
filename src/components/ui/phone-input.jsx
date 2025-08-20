import React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import PhoneNumberInput, { getCountryCallingCode } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const PhoneInput = React.forwardRef(({ className, onChange, value, ...props }, ref) => {
  return (
    <PhoneNumberInput
      ref={ref}
      className={cn("flex", className)}
      flagComponent={FlagComponent}
      countrySelectComponent={CountrySelect}
      inputComponent={InputComponent}
      smartCaret={false}
      value={value || undefined}
      onChange={(val) => onChange?.(val || "")}
      {...props}
    />
  );
});
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef(({ className, ...props }, ref) => (
  <Input
    className={cn("rounded-e-lg rounded-s-none pb-2 mobile:text-xl mobile:pb-3 tablet:pb-2 rtl:text-right rtl:pb-1 mobile:rtl:pb-0", className)}
    ref={ref}
    {...props}
  />
));
InputComponent.displayName = "InputComponent";

const CountrySelect = ({ disabled, value: selectedCountry, options: countryList, onChange }) => {
  const scrollAreaRef = React.useRef(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen} modal>
      <PopoverTrigger asChild className="">
        <Button
          type="button"
          variant="outline"
          className="flex gap-1 border-0 border-b shadow-none px-3 pb-2 mobile:pb-3 focus:z-10 mobile:rtl:pb-2"
          disabled={disabled}
        >
          <FlagComponent country={selectedCountry} countryName={selectedCountry} />
          <ChevronsUpDown
            className={cn(
              "-mr-2 size-4 opacity-50 tablet:mr-1 mobile:mr-1 rtl:mr-1",
              disabled ? "hidden" : "opacity-100"
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            value={searchValue}
            onValueChange={(val) => {
              setSearchValue(val);
              setTimeout(() => {
                const viewport = scrollAreaRef.current?.querySelector(
                  "[data-radix-scroll-area-viewport]"
                );
                if (viewport) viewport.scrollTop = 0;
              }, 0);
            }}
            placeholder="Search country..."
          />
          <CommandList>
            <ScrollArea data-lenis-prevent ref={scrollAreaRef} className="h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryList.map((entry) => {
                  const { value: country, label: countryName } = entry;
                  if (!country) return null;
                  return (
                    <CommandItem
                      key={country}
                      className="gap-2"
                      onSelect={() => {
                        onChange(country);
                        setIsOpen(false);
                      }}
                    >
                      <FlagComponent country={country} countryName={countryName} />
                      <span className="flex-1 text-sm">{countryName}</span>
                      <span className="text-sm text-foreground/50">
                        +{getCountryCallingCode(country)}
                      </span>
                      <CheckIcon
                        className={`ml-auto size-4 ${
                          country === selectedCountry ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const FlagComponent = ({ country, countryName }) => {
  const Flag = flags[country];
  return (
    <span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg:not([class*='size-'])]:size-full">
      {Flag ? <Flag title={countryName} /> : null}
    </span>
  );
};

export { PhoneInput };
