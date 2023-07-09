# import libraries that are used in the function below.
import numpy as np
from qiskit import QuantumCircuit
from qiskit.circuit import ParameterVector
from qiskit.circuit.library import ZZFeatureMap, ZFeatureMap, PauliFeatureMap
from qiskit.circuit.library import  RealAmplitudes, EfficientSU2


# feature_map function
def feature_map():     

    feature_dim = 2
    #feature_map = PauliFeatureMap(feature_dimension=feature_dim, reps=1, paulis = ['Z','Y','ZZ'])
    feature_map = ZZFeatureMap(feature_dimension=feature_dim, reps=2, entanglement='full')
    #feature_map.draw()    
    return feature_map

# variational_circuit function
def variational_circuit():
    
    feature_dim = 2
    # build the variational circuit
    var_circuit = RealAmplitudes(feature_dim, reps=4)
    #var_circuit.draw()    
    return var_circuit

# return_optimal_params function
def return_optimal_params():    
    optimal_parameters = [1.11832465,  0.1866201 , -0.42203034, -0.51791478,  0.61238959,
       -0.21961368, -1.48509084,  0.06414974,  0.0609386 , -0.86907264]
    return np.array(optimal_parameters)
