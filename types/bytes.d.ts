declare module "bytes" {
  interface BytesOptions {
    decimalPlaces?: number;
    fixedDecimals?: boolean;
    thousandsSeparator?: string;
    unitSeparator?: string;
  }
  function bytes(value: number, options?: BytesOptions): string;
  function bytes(value: string): number | null;
  export default bytes;
}
