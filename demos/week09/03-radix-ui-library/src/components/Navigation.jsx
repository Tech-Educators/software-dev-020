import { NavigationMenu } from "radix-ui";
import { CaretDownIcon } from "@radix-ui/react-icons";

export default function NavigationBar() {
    return (
        <nav>
            <NavigationMenu.Root className="relative z-10 flex w-screen justify-center text-black">
                <NavigationMenu.List className="center m-0 flex list-none rounded-md bg-gray-300 p-1 shadow-[0_2px_10px] shadow-blackA4">
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                            One
                            <CaretDownIcon
							className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
							aria-hidden
						/>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="absolute data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                            <NavigationMenu.Link>
                                Link to something
                            </NavigationMenu.Link>
                            <div className=" bg-amber-200">
                                <p>Hello worlds</p>
                            </div>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    
                    {/* below has a dropdown menu */}
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                            Link two
                            <CaretDownIcon
							className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
							aria-hidden
						/>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="absolute data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                            <NavigationMenu.Link>
                                Link to something
                            </NavigationMenu.Link>
                            <div className=" bg-amber-200">
                                <p>Hello worlds</p>
                            </div>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>


                    {/* just a link without a dropdown */}
                    <NavigationMenu.Item>
					<NavigationMenu.Link
						className="block select-none rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
						href="https://github.com/radix-ui"
					>
						Github
					</NavigationMenu.Link>
            
				</NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </nav>
    )
}