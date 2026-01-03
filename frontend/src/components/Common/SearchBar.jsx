import { Search } from "lucide-react";
import React, { useState } from "react";

export default function SearchBar() {
    const [SearchTerm, setSearchTerm] = useState("");
    const [isopen, setIsOpen] = useState(false);



    return (

        <>
            <div>
                {isopen ? 
                (
                    <form>

                    </form>
                ) : (
                    <button>
                        <Search />
                    </button>
                    )
                }

            </div>
        </>
    )
}
