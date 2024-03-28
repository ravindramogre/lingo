import { Loader } from "lucide-react"

const Loading = () => {
    return ( 
        <div className="h-full w-full flex items-center justify-center">
            <Loader className="h-8 w-8 text-muted-foreground animate-spin"></Loader>
        </div>
    );
}
 
export default Loading;