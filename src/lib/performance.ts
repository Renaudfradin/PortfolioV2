export const PERFORMANCE_CONFIG = {
  TIMEOUTS: {
    DEFAULT: 10000, // 10 secondes
  },
  RETRY: {
    MAX_ATTEMPTS: 3,
    DELAY_MS: 1000,
  },
};

export async function withRetry<T>(
  fn: () => Promise<T>,
  maxAttempts: number = PERFORMANCE_CONFIG.RETRY.MAX_ATTEMPTS,
  delayMs: number = PERFORMANCE_CONFIG.RETRY.DELAY_MS,
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      if (attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, delayMs * attempt));
      }
    }
  }

  throw lastError;
}

export async function measurePerformance<T>(
  label: string,
  fn: () => Promise<T>,
): Promise<T> {
  const start = performance.now();
  try {
    const result = await fn();
    const duration = performance.now() - start;
    console.log(`[Perf] ${label}: ${duration.toFixed(2)}ms`);
    return result;
  } catch (error) {
    const duration = performance.now() - start;
    console.error(`[Perf] ${label} FAILED: ${duration.toFixed(2)}ms`);
    throw error;
  }
}
