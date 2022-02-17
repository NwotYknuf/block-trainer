interface CanReffil {

    shouldRefill(): boolean;
    refill(): void;
}

const canRefill = (generator: any): boolean => "shouldRefill" in generator && "refill" in generator

export { type CanReffil, canRefill }