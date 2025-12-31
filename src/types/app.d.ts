declare namespace App {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type Any = any;

  interface Dictionary<T> {
    [key: number | string]: T;
  }

  type LayoutComponent<T> = {
    children?: T;
  };

  type ErrorValue = {
    children?: Record<string, ErrorValue>;
    messages: string[];
  };

  type ResponseError = {
    message: string;
    errors: Record<string, ErrorValue>;
    status?: number;
  };

  type MessageError = ResponseError['errors'];
}
