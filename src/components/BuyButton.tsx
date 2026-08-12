
type BuyButtonProps = {
    url: string;
}

export function BuyButton({ url }: BuyButtonProps) {
    return (
        <button className="buy-button" onClick={() => window.open(url, '_blank')}   >
            Comprar ahora
        </button>
    )
}
