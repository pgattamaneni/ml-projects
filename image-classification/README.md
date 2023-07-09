# Image-Classification
Problem Statement : To build a model to distinguish cat images from non-cat images using a deep neural networks.


Solution:

For L-layer model:

-The input is a (64,64,3) image which is flattened to a vector of size (12288,1).

-The corresponding vector:  [x0,x1,...,x12287]T[x0,x1,...,x12287]T  is then multiplied by the weight matrix  W[1]W[1]  and then you add the intercept  b[1]b[1] . The result is called the linear unit.

-Next, you take the relu of the linear unit. This process could be repeated several times for each  (W[l],b[l])(W[l],b[l])  depending on the model architecture.

-Finally, use the sigmoid of the final linear unit. If it is greater than 0.5, classify it to be a cat.


The Functions used are-

-def initialize_parameters_deep(layers_dims):
    ...
    return parameters 
    
-def L_model_forward(X, parameters):
    ...
    return AL, caches
    
-def compute_cost(AL, Y):
    ...
    return cost
    
-def L_model_backward(AL, Y, caches):
    ...
    return grads
    
-def update_parameters(parameters, grads, learning_rate):
    ...
    return parameters
    
This model has an accuracy of 0.8 to classify pictures which is better than Classification methods like Logistic Regression.
