import { getDirName } from '../../../../lib/utils/index.mjs';
import Tester         from '../../../lib/JsonRPCTester.mjs';

const tester = new Tester();

const dirname = getDirName(import.meta.url);

tester.setupTestsWithTransactions(`${dirname}/../../../fixtures/use-cases/admin/admins-list/positive`,
    'admin/admins-list/positive',
    async ({ config: { useCaseClass, before }, input, expected }) => {
        await before(tester.factory);
        await tester.testUseCasePositive({ method: useCaseClass.name, input, expected });
    }
);
