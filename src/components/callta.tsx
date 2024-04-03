import { Button } from "@nextui-org/react";

function CallTA( { onContactPress }: { onContactPress: () => void } ) {
    return (
        <div className="py-28 text-center">
          <h2 className="text-2xl font-bold mb-4">Got something in mind?</h2>
          <Button size="lg" color="primary" variant="shadow" onClick={onContactPress}>Contact</Button>
        </div>
    )
}

export default CallTA;