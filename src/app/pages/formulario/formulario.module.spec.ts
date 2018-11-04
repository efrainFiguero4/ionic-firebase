import { FormularioModule } from './formulario.module';

describe('FormularioModule', () => {
  let formularioModule: FormularioModule;

  beforeEach(() => {
    formularioModule = new FormularioModule();
  });

  it('should create an instance', () => {
    expect(formularioModule).toBeTruthy();
  });
});
