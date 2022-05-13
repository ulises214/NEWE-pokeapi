import { Optional } from '../../app/providers/Optional';

export type OptionalRepositoryResult<T> = Optional<RepositoryResult<T>>;
export type RepositoryResult<T> =
    | { status: false; reason: string }
    | {
          status: true;
          data: T;
      };
export type RepositoryResponse<T> = Promise<RepositoryResult<T>>;
